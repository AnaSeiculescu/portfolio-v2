export default function DownloadCV() {
    const saveFile = () => {
        fileSaver.saveAs(
            process.env.REACT_APP_URL + "/resources/cv.pdf"
        )
    }
    return (

    )
}