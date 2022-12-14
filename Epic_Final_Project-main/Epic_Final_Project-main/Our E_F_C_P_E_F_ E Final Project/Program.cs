using Our_E_F_C_P_E_F__E_Final_Project;
using MySql.Data.MySqlClient;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "LocalOriginsPolicy",
        builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
    );
}
);

var app = builder.Build();


app.UseCors("LocalOriginsPolicy");



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


string connstring = app.Configuration.GetConnectionString("db");

Potion.DB = new MySqlConnection(connstring);
Potion.preScaryReset();

Wizard.DB = new MySqlConnection(connstring);
Wizard.preScaryWizardReset();
PotionAndWiz.DB = new MySqlConnection(connstring);
CartItems.DB = new MySqlConnection(connstring);

app.Run();
