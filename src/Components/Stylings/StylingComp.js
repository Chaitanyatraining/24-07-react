import React from 'react'
import './styles.css'
import headerModule from './Header.module.css'

const StylingComp = () => {

    // Inline
    // Internal
    // External 
    // Module Stylings

    const InternalStyle = {
        headStyle: {
            marginTop:'10px',
            color: 'blue',
            backgroundColor:'orange',
            FontSize:'20px'
        },
        sectionstyle:{

        }
    }

  return (
    <div>
        <h2>StylingComp</h2>
        <h4 style={{color:'red', backgroundColor:'green'}}>This is Inline Stylings</h4>
        <h5 style={InternalStyle.headStyle}>This is Internal Stylings</h5>
        <section className='sectioncss'>This is External Styles</section>
        <div className={headerModule.divStyle}>This is Module Stylings</div>
        <h2 className='text-primary bg-warning'>This is bootstrap</h2>
    </div>
  )
}

export default StylingComp