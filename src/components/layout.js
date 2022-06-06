import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import FooterV2 from "./FooterV2";
//import { FormOpenContextProvider } from "../Contexts/FormOpenContext.js";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      
       <div className="provider-style" >
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <main>
         {children}
       </main>
       <FooterV2/>
       </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout