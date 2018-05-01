using System;
using System.Collections.Generic;

namespace DontForgetThat.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartsOn { get; set; }
        public DateTime? EndsOn { get; set; }
        public List<EventItem> Items { get; set; }
    }
}
