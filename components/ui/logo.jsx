

export default function Logo({ logo }) {
    return (
        <img
            alt="logo"
            className="mx-2 aspect-video overflow-hidden rounded-xl object-contain object-contain"
            height="180"
            src={logo}
            width="180" />
    )
}