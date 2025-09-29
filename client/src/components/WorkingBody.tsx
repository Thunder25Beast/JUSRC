import { faculty, pastSecretaries, currentMembers } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function WorkingBody() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-16">
          JUSRC Working Body and Advisors
        </h2>
        
        <div className="space-y-16">
          {/* Faculty Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Faculty Advisors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map((member, index) => (
                <Card key={index} className="text-center hover-elevate" data-testid={`faculty-${index}`}>
                  <CardHeader className="pb-4">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Secretaries */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Past Secretaries</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastSecretaries.map((secretary, index) => (
                <Card key={index} className="hover-elevate" data-testid={`past-secretary-${index}`}>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">{secretary.year}</span>
                    </div>
                    <CardTitle className="text-center text-lg">
                      {secretary.year}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {secretary.names ? (
                      <div className="space-y-1">
                        {secretary.names.map((name, nameIndex) => (
                          <p key={nameIndex} className="text-card-foreground text-sm text-center">
                            {name}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-card-foreground text-sm text-center">{secretary.name}</p>
                    )}
                    {secretary.note && (
                      <p className="text-orange text-xs text-center mt-2 font-medium">
                        {secretary.note}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Working Body */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Current Working Body Members
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {currentMembers.map((member, index) => (
                <Card key={index} className="text-center hover-elevate" data-testid={`current-member-${index}`}>
                  <CardContent className="p-4">
                    <Avatar className="w-16 h-16 mx-auto mb-3">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {member.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="font-medium text-card-foreground text-sm">{member}</h4>
                    <p className="text-muted-foreground text-xs mt-1">Member</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Join Our Research Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in contributing to undergraduate research at JIPMER? 
              Connect with our working body members and become part of our growing research network.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card border border-card-border rounded-lg p-4">
                <h4 className="font-medium text-card-foreground mb-2">Research Opportunities</h4>
                <p className="text-muted-foreground text-sm">Explore ongoing projects and collaborations</p>
              </div>
              <div className="bg-card border border-card-border rounded-lg p-4">
                <h4 className="font-medium text-card-foreground mb-2">Skill Development</h4>
                <p className="text-muted-foreground text-sm">Join workshops and training sessions</p>
              </div>
              <div className="bg-card border border-card-border rounded-lg p-4">
                <h4 className="font-medium text-card-foreground mb-2">Networking</h4>
                <p className="text-muted-foreground text-sm">Connect with faculty and peers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}