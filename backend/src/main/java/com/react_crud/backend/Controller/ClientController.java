package com.react_crud.backend.Controller;

import com.react_crud.backend.Exception.ResourceNotFoundException;
import com.react_crud.backend.Model.Client;
import com.react_crud.backend.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class ClientController {

    @Autowired
    private ClientRepository cr;


    @PostMapping("/client")
    public Client saveClient(@RequestBody Client client) {
        return cr.save(client);
    }

    @GetMapping("/client")
    public List<Client> getAllClients() {
        return cr.findAll();
    }

    @GetMapping("/client/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        Client client = cr.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ID incorrect, it doesn't exists: " + id));

        return ResponseEntity.ok(client);
    }

    @PutMapping("/client/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientRequest) {
        Client client = cr.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ID incorrect, it doesn't exists: " + id));

        client.setName(clientRequest.getName());
        client.setLastName(clientRequest.getLastName());
        client.setPhone(clientRequest.getPhone());
        client.setEmail(clientRequest.getEmail());

        Client clientUpdated = cr.save(client);

        return ResponseEntity.ok(clientUpdated);
    }

    @DeleteMapping("/client/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id) {
        Client client = cr.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ID incorrect, it doesn't exists: " + id));

        cr.delete(client);

        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }


}
