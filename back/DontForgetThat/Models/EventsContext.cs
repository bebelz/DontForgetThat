using Microsoft.EntityFrameworkCore;

namespace DontForgetThat.Models
{
    public class EventsContext : DbContext
    {
        public DbSet<Event> Events { get; set; }
        public DbSet<EventItem> EventItems { get; set; }

        public EventsContext(DbContextOptions options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Event>()
                .HasMany(e => e.Items)
                .WithOne();
        }
    }
}
