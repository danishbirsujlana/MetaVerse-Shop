import {  MdFacebook } from 'react-icons/md'
import { FaPeopleArrows } from 'react-icons/fa'
import { TbBrandAirtable } from 'react-icons/tb'
import { SiInstagram, SiTwitter, SiGithub } from 'react-icons/si'

export const woLabel = [
    {
        name: 'Products',
    },
    {
        name: 'Media',
    },
    {
        name: 'News',
    },
    {
        name: 'Support',
    },
    {
        name: 'Developers',
    },
]

export const wLabel = [
    {
        name: 'About',
        subLinks: [
            {
                site: 'Company',
                logo: <TbBrandAirtable/>,
            },
            {
                site: 'Customers',
                logo: <FaPeopleArrows/>,
            },
        ]
    },
    {
        name: 'Socials',
        subLinks: [
            {
                site: 'Facebook',
                logo: <MdFacebook/>,
            },
            {
                site: 'Instagram',
                logo: <SiInstagram/>,
            },
            {
                site: 'Twitter',
                logo: <SiTwitter/>,
            },
            {
                site: 'Facebook',
                logo: <SiGithub/>,
            },
        ]
    },
]