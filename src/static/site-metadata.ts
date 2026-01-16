interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Weihang的Workouts Map',
  siteUrl: 'weihang-worksout.vercel.app',
  logo: 'https://avatars.githubusercontent.com/u/123562171?v=4',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'ben的Blog',
      url: 'https://ben29.xyz',
    },
    {
      name: 'About',
      url: 'https://github.com/ben-29/workouts_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
