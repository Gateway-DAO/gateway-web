const BellIcon = ({ fill = "white", size = 28, hasNotifications = false, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill={fill} />
        {hasNotifications && <circle cx={size - 5} cy={5} r={5} fill="red" />}
        <path
            d="M20 29.75c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V11.75c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C15.63 13.11 14 15.67 14 18.75v5l-2 2v1h16v-1l-2-2z"
            fill="black"
        />
    </svg>
)

export default BellIcon