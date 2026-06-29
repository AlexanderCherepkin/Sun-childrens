import { StrapiResponse, StrapiSingle, SiteSettings } from "@/types";

const STRAPI_API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

function buildUrl(path: string, params?: Record<string, string | number | undefined>): string {
  const url = new URL(path, STRAPI_API_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.set(key, String(value));
    });
  }
  return url.toString();
}

async function fetchStrapi<T>(path: string, options?: RequestInit, params?: Record<string, string | number | undefined>): Promise<T | null> {
  const url = buildUrl(path, params);
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
        ...options?.headers,
      },
      next: { revalidate: 60, tags: ["strapi"] },
    });

    if (!res.ok) {
      console.warn(`Strapi request failed: ${res.status} ${res.statusText}`);
      return null;
    }

    return res.json();
  } catch (err) {
    console.warn(`Strapi request error: ${err instanceof Error ? err.message : String(err)}`);
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const res = await fetchStrapi<StrapiSingle<SiteSettings>>("/api/site-setting", { next: { revalidate: 300 } });
  return res?.data ?? null;
}

export async function getLandingSections() {
  return (await fetchStrapi<StrapiResponse<unknown>>("/api/landing-sections", undefined, {
    sort: "order:asc",
    "populate[image]": "*",
  })) ?? { data: [], meta: {} };
}

export async function getFinancialMetrics() {
  return (await fetchStrapi<StrapiResponse<unknown>>("/api/financial-metrics", undefined, { sort: "order:asc" })) ?? { data: [], meta: {} };
}

export async function getFormats() {
  return (await fetchStrapi<StrapiResponse<unknown>>("/api/formats", undefined, { sort: "order:asc" })) ?? { data: [], meta: {} };
}

export async function getTimelineSteps() {
  return (await fetchStrapi<StrapiResponse<unknown>>("/api/timeline-steps", undefined, { sort: "number:asc" })) ?? { data: [], meta: {} };
}

export async function getFranchiseItems() {
  return (await fetchStrapi<StrapiResponse<unknown>>("/api/franchise-items", undefined, { sort: "order:asc" })) ?? { data: [], meta: {} };
}

export async function getTeamRoles() {
  return (await fetchStrapi<StrapiResponse<unknown>>("/api/team-roles", undefined, { sort: "order:asc" })) ?? { data: [], meta: {} };
}

export async function getCases() {
  return (await fetchStrapi<StrapiResponse<unknown>>("/api/cases", undefined, {
    sort: "order:asc",
    "populate[photo]": "*",
  })) ?? { data: [], meta: {} };
}

export async function getTestimonials(type?: "partner" | "parent") {
  return (
    (await fetchStrapi<StrapiResponse<unknown>>("/api/testimonials", undefined, {
      sort: "order:asc",
      "populate[screenshot]": "*",
      ...(type && { "filters[type][$eq]": type }),
    })) ?? { data: [], meta: {} }
  );
}

export async function getFaq() {
  return (await fetchStrapi<StrapiResponse<unknown>>("/api/faqs", undefined, { sort: "order:asc" })) ?? { data: [], meta: {} };
}

export async function getBlogPosts(type?: "article" | "case") {
  return (
    (await fetchStrapi<StrapiResponse<unknown>>("/api/blog-posts", undefined, {
      sort: "publishedAt:desc",
      "populate[cover]": "*",
      ...(type && { "filters[type][$eq]": type }),
    })) ?? { data: [], meta: {} }
  );
}

export async function getBlogPostBySlug(slug: string) {
  const res = await fetchStrapi<StrapiResponse<unknown>>("/api/blog-posts", undefined, {
    "filters[slug][$eq]": slug,
    "populate[cover]": "*",
  });
  return res?.data[0] || null;
}

export async function getCities() {
  return (await fetchStrapi<StrapiResponse<unknown>>("/api/cities", undefined, { "pagination[pageSize]": 100 })) ?? { data: [], meta: {} };
}

export async function getAwards() {
  return (
    (await fetchStrapi<StrapiResponse<unknown>>("/api/awards", undefined, {
      sort: "order:asc",
      "populate[logo]": "*",
    })) ?? { data: [], meta: {} }
  );
}

export async function getReviewPlatforms() {
  return (
    (await fetchStrapi<StrapiResponse<unknown>>("/api/review-platforms", undefined, {
      sort: "order:asc",
      "populate[logo]": "*",
    })) ?? { data: [], meta: {} }
  );
}
