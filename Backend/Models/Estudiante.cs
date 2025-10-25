public class Estudiante
{
    public int IdEstudiante { get; set; }
    public string Carne { get; set; }
    public string Nombres { get; set; }
    public string Apellidos { get; set; }
    public string Direccion { get; set; }
    public string Telefono { get; set; }
    public string CorreoElectronico { get; set; }
    public int IdTipoSangre { get; set; }
    public DateTime FechaNacimiento { get; set; }
}

public class TipoSangre
{
    public int IdTipoSangre { get; set; }
    public string Sangre { get; set; }
}
