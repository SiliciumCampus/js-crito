import React, { useState } from 'react'
import FooterMenuItem from './FooterMenuItem'


const FooterMenu = ({input}) => {

    const menuItems = []

    const menu = `${input}`
   

    const setItems = (input) => {
        switch (input) {
            case 'Company':
                console.log(input)
                menuItems.push(
                {title: "About", url: "/"},
                {title: "Features", url: "/"},
                {title: "Works", url: "/"},
                {title: "Career", url: "/"})
                break;

            case 'Help':
                console.log(input)
                menuItems.push(
                {title: "Customer Support", url: "/"},
                {title: "Delivery Details", url: "/"},
                {title: "Terms & Conditions", url: "/"},
                {title: "Privacy Policy", url: "/"})
                break;
            case 'Resources':
                console.log(input)
                menuItems.push(
                {title: "Free eBooks", url: "/"},
                {title: "Development Tutorial", url: "/"},
                {title: "How to - Blog", url: "/"},
                {title: "Youtube Playlist", url: "/"})
                break;
            case 'Link':
                console.log(input)
                menuItems.push(
                {title: "Free eBooks", url: "/"},
                {title: "Development Tutorial", url: "/"},
                {title: "How to - Blog", url: "/"},
                {title: "Youtube Playlist", url: "/"})
                break;

        }
   }
   
    setItems(input)
    

  return (
    <>
     

        <nav className="footer-menu">
            {
                menuItems.map((menuItem, index) => (
                    <FooterMenuItem key={index} title={menuItem.title} url={menuItem.url} />
                ))
            }

        </nav>
    </>
  )
}

export default FooterMenu