
import { NavLink } from 'react-router-dom'

const Slidebar = ({Children}) => {
    const menuIt=[
        {
            path:"/",
            name:"Dashboard",
            
        },
    
        {
            path:"/Finance",
            name:"Finance",
            
        },
        {
            path:"/hr",
            name:"Hr",
            
        },
        {
            path:"/work",
            name:"Work",
            
        },
        {
            path:"/product",
            name:"Product",
            
        },
        {
            path:"/ticket",
            name:"Ticket",
            
        },
        {
            path:"/event",
            name:"Event",
            
        },
        {
            path:"/message",
            name:"Message",
            
        },
        {
            path:"/noticeboard",
            name:"Noticeboard",
            
        },
        {
            path:"/setting",
            name:"Setting",
            
        }
             
    ]
  return (
    <div className="container">
       
        <div className="slidebar">
            <div className="top_selection">
            
                <h1 className="logo">HRM</h1>
                
                

            </div>
            {
                menuIt.map((item,index)=> (
                    <NavLink to={item.path} key={index} className="link" 
                    activeclassName="active">
                        <div className="link_text">{item.name}</div>
                        </NavLink>
                ))

                
            }
        </div>
        <main>{Children}</main>
    </div>
  )
}

export default Slidebar


