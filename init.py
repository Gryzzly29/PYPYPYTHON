class Animal:
    def __init__(object, especie, raza, edad):
        object.especie = especie
        object.raza = raza
        object.edad = edad
    def __str__(self):
        return f"El animal es de especie {self.especie} su raza es {self.raza},y tiene  {self.edad} años"

a = Animal('Perro', 'French', 2)
b = Animal('Gato', 'Egipcio', 5)
print(a)  # Muestra: Perro

print(b.edad)