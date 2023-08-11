export default function InputSection({ title, children, isActive, onShow }) {
    return (
        <section className='inputSection'>
            <h2>{title}</h2>
            {isActive ? (
                //change the header section to have the arrow pointed down?
                <>{children}</>
            ) : (
                //dropdown arrow to expand instead?
                <button onClick={onShow}>Show</button>
            )}
        </section>
    )
}