// Even though it's small at the moment, we extract the theme config into it's own
// file so we don't clutter the main App component file
const mediumSpacing = 12;
const Theme = {
  mediumSpacing,
  centeredContent: {
    textAlign: 'center',
  },
  centered: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  select: {
    width: 150,
    marginBottom: mediumSpacing,
  },
};

export default Theme;
