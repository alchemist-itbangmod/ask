/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { stripIndent } from 'common-tags'

exports.onRenderBody = ({ setPreBodyComponents }) => {
  return setPreBodyComponents([
    (<script
      dangerouslySetInnerHTML={{
        __html: stripIndent`
          window.facebookSDKPromise = new Promise(function (resolve) {
            window.fbAsyncInit = function() {
              FB.init({
                appId      : '2112662722101314',
                cookie     : true,
                xfbml      : true,
                version    : 'v3.1'
              })
              resolve(FB)
            }
          })

          ;(function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0]
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js"
            fjs.parentNode.insertBefore(js, fjs)
          }(document, 'script', 'facebook-jssdk'))
        ` }}
    />),
  ])
}