import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from '../notes/NotesAppBar';


export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title, id } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {
        if  ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) );
        
    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch( startDeleting( id ) )
    }

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />
           <div className="notes__content">
                <input 
                  type="text" 
                  placeholder="Algún título" 
                  className="notes__title-input" 
                  autoComplete="off" 
                  onChange={ handleInputChange } 
                  value={ title } 
                  name="title" 
                />

                <textarea 
                  placeholder="Que tal tu dia?" 
                  className="notes__textarea" 
                  value={ body } 
                  onChange={ handleInputChange } 
                  name="body"
                ></textarea>

                {
                    (note.url) 
                    && (
                        <div className="notes__image">
                           <img alt="imagen" src={note.url} />
                        </div>
                    )
                   
                }

           </div>

                <button className="btn btn-danger" onClick={handleDelete}  >Eliminar</button>
        </div>
    )
}
