using Microsoft.EntityFrameworkCore;
using MiniFptShop.API.Data;
using MiniFptShop.API.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowAll");

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();

    if (!db.Packages.Any())
    {
        db.Packages.AddRange(
            new Package { Name = "Gói Gia đình", Price = 250000, Description = "Truyền hình, internet tốc độ cao, miễn phí cước lắp đặt." },
            new Package { Name = "Gói Cơ bản", Price = 150000, Description = "Internet ổn định cho gia đình nhỏ và giải trí nhẹ." },
            new Package { Name = "Gói Doanh nghiệp", Price = 450000, Description = "Băng thông lớn, dịch vụ hỗ trợ ưu tiên." }
        );
        db.SaveChanges();
    }

    if (!db.Users.Any())
    {
        db.Users.Add(new User { Username = "admin", Password = "admin123", Role = "Admin" });
        db.Users.Add(new User { Username = "customer", Password = "customer123", Role = "User" });
        db.SaveChanges();
    }
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();