using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;                                                                          
using Microsoft.Extensions.Hosting;
//using EADD.Domain.Interfaces;
//using EADD.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Web;
namespace EADD.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddHttpContextAccessor();
 //           services.AddScoped<IChargePointService, ChargePointService>();
            


            string conn = Configuration["IS_DEV"] == "true" ? Configuration["AFMS_CONNECTION_STRING_DEV"] : Configuration["AFMS_CONNECTION_STRING"];
   //         services.AddDbContext<EVAPIDBContext>(options => options.UseSqlServer(conn));
            services.AddControllers();
   //         services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(x => x.LoginPath = "/chargepoint/Authentication");
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
    }
}
