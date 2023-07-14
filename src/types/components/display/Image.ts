interface I_Image {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    margin?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    opacity?: string;
    cursor?: string;
    hover?: string;
    transition?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

type T_Image = I_Image;
type T_ImageRequired = Pick<T_Image, 'src'>;
type T_ImageOptional = Omit<T_Image, keyof T_ImageRequired>;

export type {
    T_Image,
    T_ImageRequired,
    T_ImageOptional
};