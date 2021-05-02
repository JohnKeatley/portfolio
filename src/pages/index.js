import React from "react";
import { withTrans } from '../i18n/withTrans'

function Home({ t, i18n}) {
  return (
    <>
        <h1>{t('home.welcomeText')}</h1>
        <h2 id="about-me">{t('home.aboutMeText')}</h2>
    </>
  )
}

export default withTrans(Home);