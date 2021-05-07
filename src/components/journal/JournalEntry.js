import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry= ({ id, date, title, body, url }) => {


  const notesDate = moment( date ); 
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch( 
      activeNote( id, {
      date, title, body, url
      })
    );
  }

  
  

    return (
       <div  onClick={ handleEntryClick } className="journal__entry pointer animate__animated animate__fadeIn animate_faster">

              {
                url &&
                 <div className="journal__entry-picture" style={{ backgroundSize: 'cover', backgroundImage:  `url(${ url })` }}>
                 </div>
              }
               
               <div className="journal__entry-body">
                 
                   <p className="journal__entry-title">
                       { title }
                   </p>

                   <p className="journal__entry-content">
                    { body }
                   </p>

               </div>

               <div className="journal__entry-date-box"> 

                 <span> { notesDate.format('dddd') } </span>

                 <h4> { notesDate.format('Do') } </h4>

               </div>
       </div>
    )
}
