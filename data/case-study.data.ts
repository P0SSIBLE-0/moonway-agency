export type ServiceType = 'Social Media' | 'Paid Ads' | 'Web Design' | 'Brand Identity' | 'SEO' | 'Content Strategy';

export interface CaseStudy {
    id: string;
    brandName: string;
    industry: string;
    services: ServiceType[];
    shortDescription: string;
    results: {
        label: string;
        value: string;
    }[];
    coverImage: string;
    themeColor: string;
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'lumina-tech',
        brandName: 'Lumina Tech',
        industry: 'SaaS / Fintech',
        services: ['Brand Identity', 'Web Design', 'Content Strategy'],
        shortDescription: 'Lumina Tech needed to break through a saturated fintech market with a voice that was both authoritative and accessible. We completely overhauled their digital presence, designing a trust-centric user interface and a brand identity that speaks to the clarity and speed of their platform. The result is a seamless experience that guides users from curiosity to conversion with zero friction.',
        results: [
            { label: 'Conversion Rate', value: '+45%' },
            { label: 'User Retention', value: '2.5x' },
        ],
        coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        themeColor: 'var(--color-pop-purple)',
    },
    {
        id: 'velvet-apparel',
        brandName: 'Velvet Apparel',
        industry: 'E-commerce / Fashion',
        services: ['Social Media', 'Paid Ads', 'Brand Identity'],
        shortDescription: 'From a local boutique to a global direct-to-consumer sensation, Velvet Apparel required a scalable ad strategy that didn\'t dilute their premium brand image. We crafted high-converting paid social campaigns paired with a chic, editorial-style visual revamp. Our approach turned casual browsers into loyal brand advocates, multiplying their quarterly revenue while maintaining a robust ROAS.',
        results: [
            { label: 'ROAS', value: '8.4x' },
            { label: 'Revenue Growth', value: '+120%' },
        ],
        coverImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
        themeColor: 'var(--color-pop-red)',
    },
    {
        id: 'green-haven',
        brandName: 'Green Haven',
        industry: 'Real Estate / Eco-Living',
        services: ['Web Design', 'SEO', 'Paid Ads'],
        shortDescription: 'Green Haven connects eco-conscious buyers with sustainable modern homes, but their old site was holding them back. We engineered a high-performance web experience focused on speed, SEO dominance, and immersive property tours. By aligning technical excellence with their mission of sustainability, we drastically reduced their cost per lead and surged organic traffic.',
        results: [
            { label: 'Lead Volume', value: '+85%' },
            { label: 'Cost Per Lead', value: '-30%' },
        ],
        coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
        themeColor: 'var(--color-pop-green)',
    },
    {
        id: 'pulse-energy',
        brandName: 'Pulse Energy',
        industry: 'B2B / Energy',
        services: ['Brand Identity', 'Web Design'],
        shortDescription: 'The enterprise energy sector is often seen as rigid and outdated. Pulse Energy wanted to change that narrative. We delivered a sleek, data-driven dashboard design and a corporate identity that emphasizes innovation and transparency. The new platform not only looks futuristic but also simplifies complex data for decision-makers, significantly speeding up deal velocity.',
        results: [
            { label: 'Site Traffic', value: '+200%' },
            { label: 'Deal Velocity', value: '+15%' },
        ],
        coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        themeColor: 'var(--color-brand)',
    },
    {
        id: 'bistro-nomad',
        brandName: 'Bistro Nomad',
        industry: 'Hospitality',
        services: ['Social Media', 'Content Strategy'],
        shortDescription: 'Bistro Nomad isn\'t just a restaurant; it\'s a movement. to build a cult following for their fusion chain, we launched a series of viral, hyper-localized content campaigns. We focused on storytelling that highlights the culture behind the cuisine. The engagement was explosive, turning online likes into long lines of hungry customers every weekend.',
        results: [
            { label: 'Social Engagement', value: '+300%' },
            { label: 'Walk-ins', value: '+50%' },
        ],
        coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
        themeColor: 'var(--color-pop-yellow)',
    },
];
