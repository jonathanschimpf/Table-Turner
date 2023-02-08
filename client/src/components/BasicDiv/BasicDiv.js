export default function BasicDiv({ title, btnText, linkUrl }) {

    return (
        <div className="divWelcome" >
            <h2 className="text-center responsiveH2Font">{title}</h2>
            <hr style={{ height: '4px' }} />

            <Form className="add">
                <Link to={linkUrl}>
                    <Button className="my-2 my-lg-0 formControl welcomeButtons" block>{btnText}</Button>
                </Link>
            </Form>

        </div>

    )
}
