import React from 'react'
import { TextFieldCustom } from '../../globals/components/TextFieldCustom'
import { Box, MenuItem, Paper, Select } from '@mui/material'

export const FormFamiliares = () => {
  return (

    <Box component={Paper} sx={{flex:1,p:4, flexDirection:'row'}}>
         <div>
            <div >
                <label >Trabajador<span >*</span></label>
                <Select name="personal_id" id="dnipcv"   required>
                    <MenuItem  value="">Seleccione una opción...</MenuItem>
                </Select>
            </div>
            
            <div >
                <label >Apellido Paterno<span >*</span></label>
                <TextFieldCustom label="Apellido Paterno" type="text"  id="Eapaterno" name="apaterno" required/>
            </div>

            <div >
                <label >Apellido Materno<span >*</span></label>
                <TextFieldCustom type="text"  id="Eamaterno" name="amaterno" required/>
            </div>

            <div >
                <label >Nombres<span >*</span></label>
                <TextFieldCustom type="text"  id="Enombres" name="nombres" required/>
            </div>

            <div className="form-group ">
                <label>Fecha de Nacimiento</label>
                <TextFieldCustom type="date"  id="Efechanacimiento" name="fechanacimiento" />
            </div>

            <div className="form-group col-md-1 file-upload">
                <label for="archivo">Copia DNI</label>
                <TextFieldCustom type="file" accept="application/pdf"  name="archivo"/>
                <TextFieldCustom type="hidden" className="form-control nro_folios" name="nro_folios"/>
            </div>

            <div className="form-group " >
                <label>Ocupacion</label>
                <TextFieldCustom type="text"  id="Eocupacion" name="ocupacion" />
            </div>  

            <div className="form-group col-md-1">
                <label>Vive</label>
                <select id="Evive" name="vive" >
                    <option value=""></option>
                    <option value="SI" >SI</option>
                    <option value="NO" >NO</option>
                </select>                      
            </div>

            <div className="form-group col-md-1 parent-hab-s-style">
                <label >Parentesco<span >*</span></label>
                <select id="Eparentesco" name="parentesco"  required>
                    <option value=""></option>
                    <option value="CONYUGUE">CONYUGUE</option>
                    <option value="PADRE">PADRE</option>
                    <option value="MADRE">MADRE</option>
                    <option value="HIJO">HIJO</option>
                </select>                        
            </div> 
            
            <div className="form-group  parent-hab-style" >
                <label>Dirección Trabajo</label>
                <TextFieldCustom type="text"  id="Elugarlaboral" name="lugarlaboral"/>
            </div>  

            <div >
                <label>Derecho Hab.</label>
                <select id="Ederecho_habiente" name="derecho_habiente" >
                    <option value="NO">NO</option>
                    <option value="SI">SI</option>
                </select>                        
            </div> 

            <div className="form-group  derecho-hab-style">
                    <label>Tipo doc. Vinculo</label>
                        <select id="Etipodocvin" name="tipodocvin" >
                            <option value=""></option>
                            <option value="ESCRITURA PUBLICA">ESCRITURA PUBLICA</option>
                            <option value="TESTAMENTO">TESTAMENTO</option>
                            <option value="SENTENCIA DECLARATORIA DE PATERNIDAD">SENTENCIA DECLARATORIA DE PATERNIDAD</option>
                            <option value="PARTIDA DE MATRIMONIO">PARTIDA DE MATRIMONIO</option>
                            <option value="ESCRITURA PUBLICA UNION DE HECHO">ESCRITURA PUBLICA UNION DE HECHO</option>            
                            <option value="DD JJ UNION DE HECHO">DD JJ UNION DE HECHO</option>                            
                        </select>                        
            </div>

            <div className="form-group col-md-1 derecho-hab-style">
                <label for="archivo">Arch.</label>
                <TextFieldCustom type="file" accept="application/pdf"  name="archivo_vinculo"/>
                <TextFieldCustom type="hidden" className="form-control nro_folios" name="nro_folios2"/>
            </div>
            
            <div className="form-group col-md-1 emergencia-s-style">
                <label>Emergencia</label>
                <select id="Eemergencia" name="emergencia" >
                    <option value="NO" >NO</option>
                    <option value="SI" >SI</option>
                </select>                      
            </div>

            <div className="form-group  emergencia-style">
                <label>Dirección</label>
                <TextFieldCustom type="text"  id="Edireccion" name="direccion"/>
            </div>

            <div className="form-group col-md-1 emergencia-style">
                <label>Teléfono</label>
                <TextFieldCustom type="text"  id="Etelefono" name="telefono"/>
            </div>

            <div className="form-group col-md-1 estadocv">
                <label>Estado Civil</label>
                <select id="Eestadocivil" name="estadocivil" >
                    <option value=""></option>
                    <option value="SOLTERO"></option>
                    <option value="CASADO"> </option>
                    <option value="VIUDO"> </option>
                    <option value="DIVORCIADO"></option>
                    <option value="CONVIVIENTE">CONVIVIENTE</option>
                </select>                    
            </div>
        </div>
        <button type="submit" className="btn btn-success ml-auto mr-0 mt-2">Guardar</button>
        
    </Box>
    
  )
}

const inputStyle = {
    
}
