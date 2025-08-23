import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.GITHUB_PAGES ? "/your-repo-name" : ""
    }
  }
};
