import mongoose, {Schema} from "mongoose";

const seguidorSchema = new Schema; ({
    // quem segue
    usuarioId : {type: String, required: true},
    // quem esta sendo seguido
    usuarioSeguidoId : {type: String, required: true}
});

export const SeguidorModel = (mongoose.models.seguidores || mongoose.model ('seguidores',seguidorSchema));