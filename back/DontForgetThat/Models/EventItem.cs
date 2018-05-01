using System;

namespace DontForgetThat.Models
{
    public class EventItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DueDate { get; set; }
        public bool Done { get; set; }
    }
}
