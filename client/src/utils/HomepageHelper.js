export const getHomepageLink = (title) => {

    let link = "";

    if (title === "Wait Staff") {
        link = ("/welcome")
    }
    if (title === "Manager") {
        link = ("/manager")
    }
    if (title === "Kitchen") {
        link = ("/kitchen")
    }

    return link;
}