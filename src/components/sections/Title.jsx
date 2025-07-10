const Title = (props) => {
    return (
        <>
            <div className="text-center pt-20 md:px-20">
                <h1 className="font-bold text-2xl md:text-4xl mb-2">{props.title} <span className="font-normal underline decoration-2 underline-offset-4">{props.subtitle}</span></h1>
                <p className="mt-1 text-xl text-gray-700">{props.text}</p>
            </div>
        </>
    )
}
export default Title;