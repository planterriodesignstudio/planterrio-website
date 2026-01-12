
// Usage of import.meta.glob is specific to Vite, which is used in this project.
// This automatically imports all images from the specified folder.

// Eager import to get the URLs immediately
const imagesModules = import.meta.glob('../assets/images/all/*.{png,jpg,jpeg,webp,mp4}', { eager: true });

export const allCategoryImages = Object.entries(imagesModules).map(([path, module]) => {
    // Extract a readable label from the filename
    // Example: "../assets/images/all/artificial-grass-1.webp" -> "artificial-grass-1"
    const fileName = path.split('/').pop().replace(/\.[^/.]+$/, "");

    // Format label: remove numbers, replace hyphens/underscores with spaces, capitalize
    const label = fileName
        .replace(/[-_]/g, ' ')       // Hyphens/Underscores to spaces
        .replace(/[0-9]/g, '')       // Remove numbers (optional, maybe keep for distinction?) -> letting numbers stay might be better if they are distinct projects?
        // User has "softscaping1", "softscaping2". "Softscaping" and "Softscaping" might be repetitive.
        // Let's just capitalize and clean up hyphens.
        .trim();

    // Helper to capitalise words
    const finalLabel = label.replace(/\b\w/g, l => l.toUpperCase());

    // Detect if it is a video
    const isVideo = path.toLowerCase().endsWith('.mp4');

    return {
        src: module.default,
        label: finalLabel || 'Planterrio Project',
        type: isVideo ? 'video' : 'image'
    };
});
