// Shared photo loading for the gallery and the home page strip.
//
// The source JPEGs are huge (up to ~16MB, thousands of pixels wide), while the
// gallery column is only ~300px. Capping the generated widths keeps the srcset
// to sizes a browser would actually pick, from phone thumbnails up to the
// full-screen modal on a retina display.
const pictures = import.meta.glob<{ default: Picture }>('./*.{jpg,jpeg}', {
	eager: true,
	query: { enhanced: true, w: '2400;1600;960;640;400' }
});

// A ~24px blurred copy of each photo, inlined as a data URL (a few hundred
// bytes each), shown underneath while the real image downloads.
const placeholders = import.meta.glob<{ default: string }>('./*.{jpg,jpeg}', {
	eager: true,
	query: { w: '24', format: 'webp', quality: '50', inline: '' }
});

export type Picture = {
	sources: Record<string, string>;
	img: { src: string; w: number; h: number };
};

export type Photo = {
	path: string;
	picture: Picture;
	placeholder: string;
};

export const photos: Photo[] = Object.entries(pictures).map(([path, module]) => ({
	path,
	picture: module.default,
	placeholder: placeholders[path].default
}));
