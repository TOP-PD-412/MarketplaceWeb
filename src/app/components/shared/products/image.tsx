import Image from "next/image";
import probe from "probe-image-size";

export type ProductImageProps = {
  src: string;
  alt: string;
};

export default async function ProductImage({ src, alt }: ProductImageProps) {
  let width = 0;
  let height = 0;
  const result = await probe(src);
  if (result.width > result.height) {
    width = Math.min(result.width, 300);
    height = width * (result.height / result.width);
  } else {
    height = Math.min(result.height, 300);
    width = height * (result.width / result.height);
  }

  return (
    <Image
      src={src}
      loading="eager"
      alt={alt}
      width={width}
      height={height}
      className="w-full h-40 object-cover"
    />
  );
}
