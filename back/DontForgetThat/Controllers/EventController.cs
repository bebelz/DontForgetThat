using DontForgetThat.Models;
using DontForgetThat.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DontForgetThat.Controllers
{
    [Route("api/events")]
    public class EventController : ControllerBase
    {
        private EventsRepository _eventsRepository;
        private EventItemsRepository _eventItemsRepository;

        public EventController(EventsContext context)
        {
            _eventsRepository = new EventsRepository(context);
            _eventItemsRepository = new EventItemsRepository(context);
        }

        [HttpGet]
        public List<Event> GetAll()
        {
            return _eventsRepository.GetAll();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var ev = _eventsRepository.GetById(id);
            if(ev == null)
            {
                return NotFound();
            }
            return Ok(ev);
        }

        [HttpGet("{eventId}/items/{itemId}")]
        public IActionResult GetItem(int eventId, int itemId)
        {
            var item = _eventsRepository.GetItem(eventId, itemId);
            return Ok(item);
        }

        [HttpPost("{eventId}/items/")]
        public IActionResult AddItem(int eventId, [FromBody] EventItem item)
        {
            _eventsRepository.AddItem(eventId, item);
            return Created("", item);
        }

        [HttpDelete("{eventId}/items/{itemId}")]
        public IActionResult RemoveItem(int eventId, int itemId)
        {
            _eventsRepository.RemoveItem(eventId, itemId);
            return NoContent();
        }

        [HttpPost("{eventId}/items/{itemId}/markAsDone")]
        public IActionResult MarkAsDone(int eventId, int itemId)
        {
            _eventItemsRepository.MarkItemAsDone(eventId, itemId);
            return NoContent();
        }

        [HttpPost("{eventId}/items/{itemId}/markAsTodo")]
        public IActionResult MarkAsTodo(int eventId, int itemId)
        {
            _eventItemsRepository.MarkItemAsTodo(eventId, itemId);
            return NoContent();
        }

        [HttpPost]
        public IActionResult Post([FromBody]Event ev)
        {
            return Ok(_eventsRepository.Create(ev));
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]string value)
        {
            return Forbid();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _eventsRepository.Delete(id);
        }
    }
}
