import React from 'react';

class Child extends React.Component{
    render(){
        return(
            <>
            { this.props.commentList.map( (e) => 
                <li> 
                    <span>Assignment 댓글</span>
                    {e.text} 
                </li> 
                
                 ) 
            }
            </>
        )
    }

}
export default Child;