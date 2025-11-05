const Feature = ({title, description, index}) => {
    return (
        <article 
            key={index}
            className="border border-primary px-4 py-1 rounded-md"
        >
            <h3 className="text-sm font-semibold text-zinc-600">{title}</h3>
            <p className="text-xs text-zinc-500">
                {description}
            </p>
        </article>
    )
}

export default Feature
