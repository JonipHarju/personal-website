import placeholderImage from "../assets/projects/placeholder.png";

// Helper function to get image from assets
export const getProjectImage = async (imageName: string) => {
  try {
    const images = import.meta.glob("../assets/projects/*.{png,jpg,jpeg,webp}");
    const imagePath = `../assets/projects/${imageName}`;
    if (images[imagePath]) {
      const imageModule = (await images[imagePath]()) as { default: any };
      return imageModule.default;
    }
  } catch (error) {
    console.warn(`Could not load image: ${imageName}`);
  }
  return placeholderImage;
};
