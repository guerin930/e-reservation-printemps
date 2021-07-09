import React from 'react'
import ButtonBottoms from './ButtonBottoms'
import Logo from './Logo'
import NavHebergement from './NavHebergement'
import Project from './Project'

export const Modele1 = () => {
    return (
        <main>
            <div className="project">
                <NavHebergement />
                <Logo />
                <Project NumProject = {0} />
                <ButtonBottoms className="titre" left={'PageHebergement'} right={'/modele-2'} />
            </div>
        </main>
    )
}

export const Modele2 = () => {
    return (
        <main>
            <div className="project">
                <NavHebergement />
                <Logo />
                <Project NumProject = {1} />
                <ButtonBottoms className="titre" left={'/modele-1'} right={'/modele-3'} />
            </div>
        </main>
    )
}

export const Modele3 = () => {
    return (
        <main>
            <div className="project">
                <NavHebergement />
                <Logo />
                <Project NumProject = {2} />
                <ButtonBottoms className="titre" left={'/modele-2'} right={'/modele-4'} />
            </div>
        </main>
    )
}

export const Modele4 = () => {
    return (
        <main>
            <div className="project">
                <NavHebergement />
                <Logo />
                <Project NumProject = {3} />
                <ButtonBottoms className="titre" left={'/modele-3'} />
            </div>
        </main>
    )
}
