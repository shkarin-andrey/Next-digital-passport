const SectionHeader = ({title, description}:any) => {
    return (
        <>
            <h2 className="font-bold text-4xl text-center">{title}</h2>
            <p className="mt-7 mb-14 max-w-screen-md text-center mx-auto font-light">{description}</p>
        </>
    )
}

export default SectionHeader
