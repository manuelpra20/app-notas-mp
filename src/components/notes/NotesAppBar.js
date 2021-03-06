import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';


export const NotesAppBar = () => {

    const { active } = useSelector(state => state.notes)

    const dispatch = useDispatch();

    const handleSave = () => {
       dispatch( startSaveNote( active ) );
    }

    const  handlePictuureClick  = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ){
            dispatch( startUploading( file )  );
        }
    }

    return (
        <div className="notes__appbar">
            
            <span>28 de agosto 2021</span>

            <input name="file" id="fileSelector" type="file" style={{ display: 'none' }} onChange={ handleFileChange } />


            <div>
                    <button 
                      className="btn"
                      onClick={ handlePictuureClick }

                    > 
                            Selecionar Imagen
                    </button>
                    <button onClick={ handleSave } className="btn "> 
                            Guardar
                    </button>
            </div>

        </div>
    )
}
