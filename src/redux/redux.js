import { createStore } from "redux";

const LINK = '/'

export const getRightSideBarData = (action) => {
    return {
        type: action
    }
}


const users_profile = [
    {
        id: 1,
        label: 'Overview',
        link: LINK,

    },
    {
        id: 2,
        label: 'Projects',
        link: LINK,

    },
    {
        id: 3,
        label: 'Campaigns',
        link: LINK,

    },
    {
        id: 4,
        label: 'Documents',
        link: LINK,

    },
    {
        id: 5,
        label: 'Followers',
        link: LINK,

    },
];


const dashboardsData = [
    {
        id: 100,
        label: 'Default',
        link: LINK,
        icon: "default"
    },
    {
        id: 101,
        label: 'eCommerce',
        link: LINK,
        icon: "ecommerce",
        children: [
            {
                id: 1025,
                label: 'Order List',
                link: "/orderlist",
            },
            {
                id: 104,
                label: 'eCommerce2',
                link: LINK,
            }
        ]
    },
    {
        id: 102,
        label: 'Projects',
        link: LINK,
        icon: "projects",
        children: [
            {
                id: 103,
                label: 'project1',
                link: LINK,
            },
            {
                id: 104,
                label: 'project2',
                link: LINK,
            }
        ]
    },
    {
        id: 9,
        label: 'Online Courses',
        link: LINK,
        icon: "online_courses",
        children: [
            {
                id: 10,
                label: 'online courses1',
                link: LINK,
            },
            {
                id: 11,
                label: 'online courses2',
                link: LINK,
            }
        ]
    },
];

const pageData = [
    {
        id: 112344,
        label: 'User Profile',
        link: LINK,
        icon: "user_profile",
        children: users_profile
    },
    {
        id: 101,
        label: 'Account',
        link: LINK,
        icon: "account",
        children: users_profile
    },
    {
        id: 102,
        label: 'Corporate',
        link: LINK,
        icon: "corporate",
        children: users_profile
    },
    {
        id: 1030,
        label: 'Blog',
        link: LINK,
        icon: "blog",
        children: users_profile
    },
    {
        id: 1035,
        label: 'Social',
        link: LINK,
        icon: "social",
        children: users_profile
    },
]

const summaryData = [
    {
        title: "Customers",
        count: "12345",
        percentage_change: "+11.01%",
        status: "raise"
    },
    {
        title: "Orders",
        count: "12345",
        percentage_change: "-0.03%",
        status: "fall"
    },
    {
        title: "Revenue",
        count: "12345",
        percentage_change: "+15.01%",
        status: "raise"
    },
    {
        title: "Growth",
        count: "30%",
        percentage_change: "+6.0%",
        status: "raise"
    }
]


const dummyData = {
    rightSideBarData: [
        {
            heading: "Notifications",
            data: [
                {
                    title: "You have a bug that need",
                    description: "Just now",
                    image_url: "",
                    status: "bug"
                },
                {
                    title: "New user register",
                    description: "15 minutes ago",
                    image_url: "",
                    status: "new_user"
                },
                {
                    title: "You have a bug that need",
                    description: "2 hours ago",
                    image_url: "",
                    status: "bug"
                },
                {
                    title: "Andi lande subscribed to you",
                    description: "Today, 11:59 AM",
                    image_url: "",
                    status: "subscribed"
                }
            ]
        },
        {
            heading: "Activities",
            data: [
                {
                    title: "You have a bug that need",
                    description: "2 hours ago",
                    image_url: "https://s3-alpha-sig.figma.com/img/5618/07e2/4f384b89a83502e0c6fc6cbc98817827?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PP0KpjzjnTy5sSOohCpgQpPkyKeWpXSHSI3U1TNLaOlrm-ftkq9-uDU-8ZEVZgTB3Ljoj4IiuuLLCnTUTaMV~VQqTEikQCFbZKSSoTt~7UP-Qje3xWYUFGgjqzrRdxr0TTAghktbi6aaLQDAwvi1~AIdzvwiexA-7LM50AsmrCL6bLvjizCPnHVOKRcByYqHHOQY7hLO67PmAAvwY3e8ZIrgSwVvLm64UaF6eCt7BaXBEdrQkxnsiCOkbUNYNVpeYVOsgMWRiWO7jvNngkwVwuDJtF23a8TEatMxX9qb9HdouE7U~1F-G24DTyZa0UBi94HXvuINV8VSOheMy~xMoQ__",
                    status: ""
                },
                {
                    title: "You have a bug that need",
                    description: "2 hours ago",
                    status: "",
                    image_url: "https://s3-alpha-sig.figma.com/img/5618/07e2/4f384b89a83502e0c6fc6cbc98817827?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PP0KpjzjnTy5sSOohCpgQpPkyKeWpXSHSI3U1TNLaOlrm-ftkq9-uDU-8ZEVZgTB3Ljoj4IiuuLLCnTUTaMV~VQqTEikQCFbZKSSoTt~7UP-Qje3xWYUFGgjqzrRdxr0TTAghktbi6aaLQDAwvi1~AIdzvwiexA-7LM50AsmrCL6bLvjizCPnHVOKRcByYqHHOQY7hLO67PmAAvwY3e8ZIrgSwVvLm64UaF6eCt7BaXBEdrQkxnsiCOkbUNYNVpeYVOsgMWRiWO7jvNngkwVwuDJtF23a8TEatMxX9qb9HdouE7U~1F-G24DTyZa0UBi94HXvuINV8VSOheMy~xMoQ__"
                },
                {
                    title: "You have a bug that need",
                    description: "2 hours ago",
                    status: "",
                    image_url: "https://s3-alpha-sig.figma.com/img/5618/07e2/4f384b89a83502e0c6fc6cbc98817827?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PP0KpjzjnTy5sSOohCpgQpPkyKeWpXSHSI3U1TNLaOlrm-ftkq9-uDU-8ZEVZgTB3Ljoj4IiuuLLCnTUTaMV~VQqTEikQCFbZKSSoTt~7UP-Qje3xWYUFGgjqzrRdxr0TTAghktbi6aaLQDAwvi1~AIdzvwiexA-7LM50AsmrCL6bLvjizCPnHVOKRcByYqHHOQY7hLO67PmAAvwY3e8ZIrgSwVvLm64UaF6eCt7BaXBEdrQkxnsiCOkbUNYNVpeYVOsgMWRiWO7jvNngkwVwuDJtF23a8TEatMxX9qb9HdouE7U~1F-G24DTyZa0UBi94HXvuINV8VSOheMy~xMoQ__"
                },
                {
                    title: "You have a bug that need",
                    description: "2 hours ago",
                    status: "",
                    image_url: "https://s3-alpha-sig.figma.com/img/5618/07e2/4f384b89a83502e0c6fc6cbc98817827?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PP0KpjzjnTy5sSOohCpgQpPkyKeWpXSHSI3U1TNLaOlrm-ftkq9-uDU-8ZEVZgTB3Ljoj4IiuuLLCnTUTaMV~VQqTEikQCFbZKSSoTt~7UP-Qje3xWYUFGgjqzrRdxr0TTAghktbi6aaLQDAwvi1~AIdzvwiexA-7LM50AsmrCL6bLvjizCPnHVOKRcByYqHHOQY7hLO67PmAAvwY3e8ZIrgSwVvLm64UaF6eCt7BaXBEdrQkxnsiCOkbUNYNVpeYVOsgMWRiWO7jvNngkwVwuDJtF23a8TEatMxX9qb9HdouE7U~1F-G24DTyZa0UBi94HXvuINV8VSOheMy~xMoQ__"
                },
                {
                    title: "You have a bug that need",
                    description: "2 hours ago",
                    status: "",
                    image_url: "https://s3-alpha-sig.figma.com/img/5618/07e2/4f384b89a83502e0c6fc6cbc98817827?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PP0KpjzjnTy5sSOohCpgQpPkyKeWpXSHSI3U1TNLaOlrm-ftkq9-uDU-8ZEVZgTB3Ljoj4IiuuLLCnTUTaMV~VQqTEikQCFbZKSSoTt~7UP-Qje3xWYUFGgjqzrRdxr0TTAghktbi6aaLQDAwvi1~AIdzvwiexA-7LM50AsmrCL6bLvjizCPnHVOKRcByYqHHOQY7hLO67PmAAvwY3e8ZIrgSwVvLm64UaF6eCt7BaXBEdrQkxnsiCOkbUNYNVpeYVOsgMWRiWO7jvNngkwVwuDJtF23a8TEatMxX9qb9HdouE7U~1F-G24DTyZa0UBi94HXvuINV8VSOheMy~xMoQ__"
                },
            ]
        },
        {
            heading: "Contacts",
            data: [
                {
                    title: "Natali Craig",
                    description: "",
                    status: "",
                    image_url: "https://s3-alpha-sig.figma.com/img/8c91/08b9/d537ec99e7358705dde01753cd94f355?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFV1fFeRkZFSK8qC7DybYA67tU5mLLrMIG5pviNVNs-2VwMDMlJ43d9WGqe-SMlcSby4iNTDYavYwiw~YQEHURiwfYRtX1rRKoqMLKXiI~wTEmA9bp2qzSIQfV16LCMA6AQvHW3-emGI12M9dPnhI~9pDCwZitiBDOWaCdNIpIvXgTxJJtD00v6CE5e3zpnc67alSlrQv9UlRyHhCCj7ROgnRll3MbyOmPDmTLqWp~C6aWtCtZktgxNvj2RNuIQAuLx1zqUzsfdKkPEln8IXjw5RusPYnU--Rft33sgfp5ZQrxBv0vEpLzZQvxVQbU5fSn~wfVr9Nh1BWg3gxhuy1w__"
                },
                {
                    title: "Natali Craig",
                    description: "",
                    status: "",
                    image_url: "https://s3-alpha-sig.figma.com/img/8c91/08b9/d537ec99e7358705dde01753cd94f355?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFV1fFeRkZFSK8qC7DybYA67tU5mLLrMIG5pviNVNs-2VwMDMlJ43d9WGqe-SMlcSby4iNTDYavYwiw~YQEHURiwfYRtX1rRKoqMLKXiI~wTEmA9bp2qzSIQfV16LCMA6AQvHW3-emGI12M9dPnhI~9pDCwZitiBDOWaCdNIpIvXgTxJJtD00v6CE5e3zpnc67alSlrQv9UlRyHhCCj7ROgnRll3MbyOmPDmTLqWp~C6aWtCtZktgxNvj2RNuIQAuLx1zqUzsfdKkPEln8IXjw5RusPYnU--Rft33sgfp5ZQrxBv0vEpLzZQvxVQbU5fSn~wfVr9Nh1BWg3gxhuy1w__"
                },
                {
                    title: "Natali Craig",
                    description: "",
                    status: "",
                    image_url: "https://s3-alpha-sig.figma.com/img/8c91/08b9/d537ec99e7358705dde01753cd94f355?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFV1fFeRkZFSK8qC7DybYA67tU5mLLrMIG5pviNVNs-2VwMDMlJ43d9WGqe-SMlcSby4iNTDYavYwiw~YQEHURiwfYRtX1rRKoqMLKXiI~wTEmA9bp2qzSIQfV16LCMA6AQvHW3-emGI12M9dPnhI~9pDCwZitiBDOWaCdNIpIvXgTxJJtD00v6CE5e3zpnc67alSlrQv9UlRyHhCCj7ROgnRll3MbyOmPDmTLqWp~C6aWtCtZktgxNvj2RNuIQAuLx1zqUzsfdKkPEln8IXjw5RusPYnU--Rft33sgfp5ZQrxBv0vEpLzZQvxVQbU5fSn~wfVr9Nh1BWg3gxhuy1w__"
                },
                {
                    title: "Natali Craig",
                    description: "",
                    status: "",
                    image_url: "https://s3-alpha-sig.figma.com/img/8c91/08b9/d537ec99e7358705dde01753cd94f355?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFV1fFeRkZFSK8qC7DybYA67tU5mLLrMIG5pviNVNs-2VwMDMlJ43d9WGqe-SMlcSby4iNTDYavYwiw~YQEHURiwfYRtX1rRKoqMLKXiI~wTEmA9bp2qzSIQfV16LCMA6AQvHW3-emGI12M9dPnhI~9pDCwZitiBDOWaCdNIpIvXgTxJJtD00v6CE5e3zpnc67alSlrQv9UlRyHhCCj7ROgnRll3MbyOmPDmTLqWp~C6aWtCtZktgxNvj2RNuIQAuLx1zqUzsfdKkPEln8IXjw5RusPYnU--Rft33sgfp5ZQrxBv0vEpLzZQvxVQbU5fSn~wfVr9Nh1BWg3gxhuy1w__"
                },
                {
                    title: "Natali Craig",
                    description: "",
                    status: "",
                    image_url: "https://s3-alpha-sig.figma.com/img/8c91/08b9/d537ec99e7358705dde01753cd94f355?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFV1fFeRkZFSK8qC7DybYA67tU5mLLrMIG5pviNVNs-2VwMDMlJ43d9WGqe-SMlcSby4iNTDYavYwiw~YQEHURiwfYRtX1rRKoqMLKXiI~wTEmA9bp2qzSIQfV16LCMA6AQvHW3-emGI12M9dPnhI~9pDCwZitiBDOWaCdNIpIvXgTxJJtD00v6CE5e3zpnc67alSlrQv9UlRyHhCCj7ROgnRll3MbyOmPDmTLqWp~C6aWtCtZktgxNvj2RNuIQAuLx1zqUzsfdKkPEln8IXjw5RusPYnU--Rft33sgfp5ZQrxBv0vEpLzZQvxVQbU5fSn~wfVr9Nh1BWg3gxhuy1w__"
                },
                {
                    title: "Natali Craig",
                    description: "",
                    status: "",
                    image_url: "https://s3-alpha-sig.figma.com/img/8c91/08b9/d537ec99e7358705dde01753cd94f355?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFV1fFeRkZFSK8qC7DybYA67tU5mLLrMIG5pviNVNs-2VwMDMlJ43d9WGqe-SMlcSby4iNTDYavYwiw~YQEHURiwfYRtX1rRKoqMLKXiI~wTEmA9bp2qzSIQfV16LCMA6AQvHW3-emGI12M9dPnhI~9pDCwZitiBDOWaCdNIpIvXgTxJJtD00v6CE5e3zpnc67alSlrQv9UlRyHhCCj7ROgnRll3MbyOmPDmTLqWp~C6aWtCtZktgxNvj2RNuIQAuLx1zqUzsfdKkPEln8IXjw5RusPYnU--Rft33sgfp5ZQrxBv0vEpLzZQvxVQbU5fSn~wfVr9Nh1BWg3gxhuy1w__"
                }
            ]
        }
    ],
    dashboards: dashboardsData,
    pages: pageData,
    orderSummaryData: summaryData,
}

const reducer = (state = dummyData, action) => {
    return state
}

export const store = createStore(reducer)