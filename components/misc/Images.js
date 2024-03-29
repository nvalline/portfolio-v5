import Image from 'next/image';

export const ImageDefault = ({
	src,
	width,
	height,
	alt,
	placeholder,
	blurDataURL,
	className
}) => {
	return (
		<Image
			src={src}
			width={width}
			height={height}
			alt={alt}
			placeholder={placeholder}
			blurDataURL={blurDataURL}
			className={className}
		/>
	);
};

export const ImageFill = ({
	src,
	alt,
	objectFit,
	placeholder,
	blurDataURL,
	className
}) => {
	return (
		<Image
			src={src}
			alt={alt}
			object-fit={objectFit}
			placeholder={placeholder}
			blurDataURL={blurDataURL}
			className={className}
			fill='true'
		/>
	);
};

export const ImageFillPriority = ({
	src,
	alt,
	objectFit,
	placeholder,
	blurDataURL,
	className
}) => {
	return (
		<Image
			src={src}
			alt={alt}
			object-fit={objectFit}
			placeholder={placeholder}
			blurDataURL={blurDataURL}
			className={className}
			fill='true'
			priority
		/>
	);
};
