import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
// import { useMenuQuery } from '../hooks/useMenuQuery'
import Navigation from './Navigation/Navigation';

const Header = () => {
    // const { data } = useMenuQuery();
    // console.log(wpMenu);
    const data = useStaticQuery(graphql`
    {
      wpMenu {
        name
        menuItems {
          nodes {
            id
            label
            url
            path
          }
        }
      }
    }
    `)
    return (
        <>
            <Navigation menu={data.wpMenu.menuItems.nodes} />
        </>
    );
    
}

export default Header
