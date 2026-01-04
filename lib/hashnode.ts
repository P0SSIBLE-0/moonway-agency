const ENDPOINT = 'https://gql.hashnode.com';

const HEADERS = {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/json',
};

export interface HashnodePost {
    id: string;
    title: string;
    brief: string;
    slug: string;
    coverImage: {
        url: string;
    } | null;
    author: {
        name: string;
        profilePicture: string;
    };
    publishedAt: string;
    readTimeInMinutes: number;
    tags: {
        name: string;
    }[];
}

export interface HashnodePostDetail extends HashnodePost {
    content: {
        html: string;
    };
}

export async function fetchBlogPosts(host: string): Promise<HashnodePost[]> {
    const query = `
        query GetPosts($host: String!) {
            publication(host: $host) {
                posts(first: 20) {
                    edges {
                        node {
                            id
                            title
                            slug
                            brief
                            publishedAt
                            readTimeInMinutes
                            coverImage {
                                url
                            }
                            author {
                                name
                                profilePicture
                            }
                            tags {
                                name
                            }
                        }
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                query,
                variables: { host },
            }),
            next: { revalidate: 60 },
        });

        const data = await response.json();
        return data.data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
    } catch (error) {
        console.error("Error fetching Hashnode posts:", error);
        return [];
    }
}

export async function fetchBlogPost(host: string, slug: string): Promise<HashnodePostDetail | null> {
    const query = `
        query GetPost($host: String!, $slug: String!) {
            publication(host: $host) {
                post(slug: $slug) {
                    id
                    title
                    slug
                    brief
                    content {
                        html
                    }
                    coverImage {
                        url
                    }
                    author {
                        name
                        profilePicture
                    }
                    publishedAt
                    readTimeInMinutes
                    tags {
                        name
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                query,
                variables: { host, slug },
            }),
            next: { revalidate: 60 },
        });

        const data = await response.json();
        return data.data?.publication?.post || null;
    } catch (error) {
        console.error(`Error fetching Hashnode post ${slug}:`, error);
        return null;
    }
}
