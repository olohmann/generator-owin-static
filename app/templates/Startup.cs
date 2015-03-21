using Microsoft.Owin;
using <%= namespace %>;

[assembly: OwinStartup(typeof(Startup))]
namespace <%= namespace %>
{
    using Microsoft.Owin;
    using Microsoft.Owin.Extensions;
    using Microsoft.Owin.FileSystems;
    using Microsoft.Owin.StaticFiles;
    using Owin;

    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Make ./public the default root of the static files in our Web Application.
            app.UseFileServer(new FileServerOptions
            {
                RequestPath = new PathString(string.Empty),
                FileSystem = new PhysicalFileSystem("./<%= staticWebRoot %>"),
                EnableDirectoryBrowsing = true,
            });

            app.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}
