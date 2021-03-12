exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allStrapiAdverts(filter: { published: { eq: true } }) {
        nodes {
          id
          slug
          type
        }
      }
      allStrapiPages(filter: { published: { eq: true } }) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const adverts = result.data.allStrapiAdverts.nodes;

  adverts.forEach((advert) => {
    if (!advert || !advert.id || !advert.slug) {
      return;
    }

    actions.createPage({
      path: `/${advert.type}/${advert.slug}`,
      component: require.resolve("./src/templates/advert.js"),
      context: {
        id: advert.id,
        slug: advert.slug,
      },
    });
  });

  const pages = result.data.allStrapiPages.nodes;

  pages.forEach((page) => {
    actions.createPage({
      path: `/${page.slug}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.id,
        slug: page.slug,
      },
    });
  });
};
