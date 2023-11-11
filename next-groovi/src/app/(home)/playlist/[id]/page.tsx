interface PlaylistPageProps {
    params: { id: number }
}

export default function PlaylistPage(props: PlaylistPageProps) {
    const { id } = props.params;

    return (
        <div>
            Playlist: {id}
        </div>
    )
}