interface GapProps {
    gapSize: number
}

export default function Gap(props: GapProps) {
    const { gapSize } = props;

    const height = `${gapSize}rem`;

    return <div style={{ height }} />
}