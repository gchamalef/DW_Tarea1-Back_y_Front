using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class EstudiantesController : ControllerBase
{
    private readonly MySqlConnection _connection;
    public EstudiantesController(MySqlConnection connection)
    {
        _connection = connection;
    }

    [HttpGet]
    public async Task<IEnumerable<Estudiante>> Get()
    {
        var query = "SELECT * FROM estudiantes";
        var command = new MySqlCommand(query, _connection);
        var reader = await command.ExecuteReaderAsync();

        var estudiantes = new List<Estudiante>();
        while (await reader.ReadAsync())
        {
            estudiantes.Add(new Estudiante
            {
                IdEstudiante = reader.GetInt32(0),
                Carne = reader.GetString(1),
                Nombres = reader.GetString(2),
                Apellidos = reader.GetString(3),
                Direccion = reader.GetString(4),
                Telefono = reader.GetString(5),
                CorreoElectronico = reader.GetString(6),
                IdTipoSangre = reader.GetInt32(7),
                FechaNacimiento = reader.GetDateTime(8)
            });
        }
        return estudiantes;
    }

    // Implementa POST, PUT, DELETE según sea necesario
}
